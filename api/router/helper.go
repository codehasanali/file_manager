package router

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

type RequestBody struct {
	Path string `json:"path" form:"path" binding:"required"`
}

type PutRequestBody struct {
	OldPath string `json:"oldPath" form:"oldPath" binding:"required"`
	NewPath string `json:"newPath" form:"newPath" binding:"required"`
}

func GetBodyFromRequest[T RequestBody | PutRequestBody](context *gin.Context, requestBody *T) error {
	err := context.BindJSON(&requestBody)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
	}

	return err
}

func GetPathFromParams(context *gin.Context) (string, error) {
	path := context.Query("path")

	if len(path) == 0 {
		context.JSON(http.StatusBadRequest, gin.H{"message": "path is not given."})
		context.Abort()

		return "", errors.New("path is not provided")
	}

	return path, nil
}

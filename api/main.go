package main

import (
	"fmt"

	"github.com/codehasan/file/api/router"
	"github.com/codehasan/file/api/util"
)

func main() {
	fmt.Println(" SERVER 🚀")
	fmt.Println("=======================")

	util.GetStorageFolder()
	fmt.Println("=======================")

	port := util.GetPort()
	router.StartServer(port)
}

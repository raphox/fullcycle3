package actions

import (
	"net/http"

	"github.com/gobuffalo/buffalo"
)

// HelloHandler is a default handler to serve up
// a hello page.
func HelloHandler(c buffalo.Context) error {
	return c.Render(http.StatusOK, r.HTML("hello.html", "application_dark.html"))
}
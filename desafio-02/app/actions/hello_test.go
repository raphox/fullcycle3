package actions

import "net/http"

func (as *ActionSuite) Test_HelloHandler() {
	res := as.HTML("/").Get()

	as.Equal(http.StatusOK, res.Code)
	as.Contains(res.Body.String(), "Hello Full Cycle")
}

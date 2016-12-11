using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class index : System.Web.UI.Page
{
    public String ipv4s;
    private FileServer server = new FileServer();
    protected void Page_Load(object sender, EventArgs e)
    {
        //string message = "test";
        string message = Request.ServerVariables["REMOTE_ADDR"];
        if (server.ifEque(message))
        {
            server.doWrite(message);
        }
    }
}
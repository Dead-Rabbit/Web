using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

/// <summary>
/// FileServer 的摘要说明
/// FileServer 只为一次访问时加入
/// </summary>
public class FileServer
{
    static private string filePath = "F:/testFiles/iptest1.txt";

    public bool ifEque(string ip)
    {
        StreamReader sr = new StreamReader(filePath);
        bool ifSucc = true;
        string line;
        if(sr == null || ip.Equals(""))
        {
            return false;
        }
        while ((line = sr.ReadLine()) != null)
        {
            if (line.Equals("")) break;
            Console.WriteLine(line);
            if (line.Equals(ip))
            {
                ifSucc = false;
            }
        }
        sr.Close();
        return ifSucc;
    }
    public bool doWrite(string ipv4)
    {
        StreamWriter sw = new StreamWriter(filePath, true);
        bool ifSucc = false;
        sw.WriteLine(ipv4);
        sw.Close();
        return ifSucc;
    }
    static public void changeIpv4(string filePathinput)
    {
        filePath = filePathinput;
    }
}
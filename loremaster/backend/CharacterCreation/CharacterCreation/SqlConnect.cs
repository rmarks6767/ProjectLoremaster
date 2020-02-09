using System;

namespace CharacterCreation
{
    public class SqlConnect
    {
        public string Server { get; set; }  
        public string User { get; set; }  
        public string Database { get; set; } 
        public string Port { get; set; }  
        public string Password { get; set; }  

        public MySqlConnection GetConnection()
        {
            return new MySqlConnection(
                $"server={Server};" +
                $"user={User};" +
                $"database={Database};" +
                $"port={Port};" +
                $"password={Password};"
            );
        }
    }
}
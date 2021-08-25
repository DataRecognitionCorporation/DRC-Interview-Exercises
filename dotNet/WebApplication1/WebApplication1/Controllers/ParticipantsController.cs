using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace WebApplication1.Controllers {

  public class Participant {

    static public List<Participant> Data = new List<Participant>();

    static Participant() {
      var source = new Participant[] { 
        new Participant() { id = 131, name = "name-aaa1" },
        new Participant() { id = 215, name = "name-bbb2" },
        new Participant() { id = 344, name = "name-aaa3" },
        new Participant() { id = 472, name = "name-bbb4" },
        new Participant() { id = 599, name = "name-aaa5" },
      };
      Data.AddRange(source);
    }

    public int id;
    public string name;
  }


  public class ParticipantsController : ApiController {


    // GET api/participants
    // <optional> GET api/participants?nameLike=aaa
    public IEnumerable<Participant> Get() {
      var query = ControllerContext.Request.GetQueryNameValuePairs().ToDictionary(kv => kv.Key, kv => kv.Value);
      var nameLike = (from kv in query where kv.Key == "nameLike" select kv.Value).FirstOrDefault();

      if (nameLike == null) {
        return Participant.Data;
      } else {
        return (from p in Participant.Data where p.name.ToLower().Contains(nameLike) select p);
      }
    }

    // GET api/participants/344
    public Participant Get(int id) {
      return (from p in Participant.Data where p.id == id select p).FirstOrDefault();
    }

  }
}

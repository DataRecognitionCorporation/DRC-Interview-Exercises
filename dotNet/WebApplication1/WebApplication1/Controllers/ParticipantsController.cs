﻿using System;
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


    // GET api/participants -- Return all Participants
    // <optional> GET api/participants?nameLike=aaa -- Return any Participants with a partial name match of the 'nameLike' value in the query string
    public IEnumerable<Participant> Get() {
      return null;
    }

    // GET api/participants/344 -- Return Participant with the supplied id
    public Participant Get(int id) {
      return null;
    }

  }
}

let superPhoneData = [
  { name: "Superman",
    number: "11-SUPES",
    company: "DC",
    image: "https://s-media-cache-ak0.pinimg.com/originals/c0/3b/17/c03b178c4d4c8717347d95fd2386f04f.jpg"
  },

  { name: "Batman",
    number: "12-BATS",
    company: "DC",
    image: "http://kultstudio.com/__data/5c4df9633b89bfa2915587e90e781d86.jpg"
  },

  { name: "Gambit",
    number: "13-GAMBIT",
    company: "Marvel",
    image: "https://s-media-cache-ak0.pinimg.com/236x/37/3d/27/373d272769cca5f3b125a9a84735c2da.jpg"
  },

  { name: "Wolverine",
    number: "14-WOLVY",
    company: "Marvel",
    image: "https://static1.squarespace.com/static/524dd0ace4b088674ffde751/525f7735e4b01b05c6017cf9/525f8243e4b076901663dcc6/1381990989330/MFA0037-Visions+Wolverine-+Alex+Ross.jpg?format=500w"
  },

  { name: "Spawn",
    number: "15-SPAWN",
    company: "Image",
    image: "http://cdn.moviestillsdb.com/sm/b80c1c3b283e733f21ac302a88265926/spawn.jpg"
  },

  { name: "Dark Claw",
    number: "16-DKCLW",
    company: "Amalglam",
    image: "http://www.writeups.org/wp-content/uploads/Dark-Claw-Amalgam-Comics-Wolverine-Batman-a.jpg"
  }

]



angular
  .module("superPhoneApp", [])
  .controller("superPhonesCtrl", [superPhoneController])

  function superPhoneController(){
    this.superPhones = superPhoneData
  }

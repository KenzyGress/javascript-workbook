"use strict";

let assert = require("assert");

let jobTypes = {
  pilot: "MAV",
  mechanic: "Repair Ship",
  commander: "Main Ship",
  programmer: "Any Ship!"
};

// build class for crew member
class CrewMember {
  constructor(name, job, specialSkill) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
  }
  enterShip(Ship) {
    Ship.crew.push(this);
    this.ship = Ship;
  }
}

// build class for ship
class Ship {
  constructor(name, type, ability, crew) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }
  missionStatement() {
    var emptyShipMessage = "Can't perform a mission yet.";
    if (this.crew == undefined || this.crew.length == 0) {
      return emptyShipMessage;
    } else {
      return this.ability;
    }
  }
}

// make sure crew members can enter the ship
// make sure a mission statement is returned
// if ship is empty it cannot complete the mission statement
// if ship has one member on board, ship can complete mission statement

//tests
if (typeof describe === "function") {
  describe("CrewMember", function() {
    it("should have a name, a job, a specialSkill and ship upon instantiation", function() {
      var crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      assert.equal(crewMember1.name, "Rick Martinez");
      assert.equal(crewMember1.job, "pilot");
      assert.equal(crewMember1.specialSkill, "chemistry");
      assert.equal(crewMember1.ship, null);
    });

    it("can enter a ship", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe("Ship", function() {
    it("should have a name, a type, an ability and an empty crew upon instantiation", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      assert.equal(mav.name, "Mars Ascent Vehicle");
      assert.equal(mav.type, "MAV");
      assert.equal(mav.ability, "Ascend into low orbit");
      assert.equal(mav.crew.length, 0);
    });

    it("can return a mission statement correctly", function() {
      let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
      let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
      let hermes = new Ship(
        "Hermes",
        "Main Ship",
        "Interplanetary Space Travel"
      );
      let crewMember2 = new CrewMember(
        "Commander Lewis",
        "commander",
        "geology"
      );
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}

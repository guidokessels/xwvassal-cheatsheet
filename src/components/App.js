import React, { Component } from 'react';
import Command from './Command';
import Key from './Key';
import Group from './Group';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="title">X-Wing Vassal Cheat Sheet</h1>

        <Group title="Ship Stats" color="#610000">
          <p>
            Press when a ship is selected to increase that stat by 1. Combine
            with <Key>Ctrl</Key> to decrease by 1 instead.
          </p>
          <Command text="Pilot Skill" keys="Alt P" />
          <Command text="Attack" keys="Alt A" />
          <Command text="Agility" keys="Alt E" />
          <Command text="Hull" keys="Alt H" />
          <Command text="Shields" keys="Alt S" />
          <Command text="Big ID Tag" keys="Shift N" />
          <Command text="Small ID Tag" keys="Shift P" />
        </Group>

        <Group title="Movement" color="#000061">
          <p>
            Press when a ship is selected. Replace <Key>#</Key> with the desired
            speed of the maneuver (<Key>1</Key> - <Key>5</Key>). After moving,
            if the ship overlaps an other ship, you can press <Key>C</Key> to
            automatically resolve the bump.
          </p>
          <Command maneuver="straight" keys="Shift #" />
          <Command maneuver="bankleft" keys="Ctrl #" />
          <Command maneuver="turnleft" keys="Ctrl Shift #" />
          <Command maneuver="bankright" keys="Alt #" />
          <Command maneuver="turnleft" keys="Alt Shift #" />
          <Command maneuver="kturn" keys="Alt Ctrl #" />
          <Command text="1" maneuver="sloopleft" keys="Ctrl Q" />
          <Command text="1" maneuver="sloopright" keys="Alt Q" />
          <Command text="2" maneuver="sloopleft" keys="Ctrl W" />
          <Command text="2" maneuver="sloopright" keys="Alt W" />
          <Command text="2" maneuver="trollleft" keys="Ctrl Y" />
          <Command text="2" maneuver="trollright" keys="Alt Y" />
          <Command text="3" maneuver="sloopleft" keys="Ctrl E" />
          <Command text="3" maneuver="sloopright" keys="Alt E" />
          <Command text="3" maneuver="trollleft" keys="Ctrl T" />
          <Command text="3" maneuver="trollright" keys="Alt T" />
          <Command text="1" maneuver="reversestraight" keys="Shift 6" />
          <Command text="1" maneuver="reversebankleft" keys="Ctrl 6" />
          <Command text="1" maneuver="reversebankright" keys="Alt 6" />
          <Command text="Rotate ship 180°" keys="Ctrl U" />
          <Command text="Resolve bumps" keys="C" />
        </Group>

        <Group title="Dials">
          <p>
            Press when a maneuver dial is selected. Changing the maneuver on a
            dial should be done in the player's hand.
          </p>
          <Command text="Hide/Reveal dial" keys="Ctrl R" />
          <Command text="Change Maneuver Left" keys="," />
          <Command text="Change Maneuver Right" keys="." />
          <Command text="Rotate Dial Left" keys="←" />
          <Command text="Rotate Dial Right" keys="→" />
        </Group>

        <Group title="Firing Arcs">
          <p>Press when a ship is selected to toggle a firing arc.</p>
          <Command text="360&deg; firing arc" keys="Ctrl L" />
          <Command text="Front arc" keys="Ctrl F" />
          <Command text="Rear aux arc" keys="Ctrl V" />
          <Command text="Side aux arc" keys="Ctrl N" />
          <Command text="Left mobile arc" keys="Ctrl Shift V" />
          <Command text="Right mobile arc" keys="Alt Shift V" />
          <Command text="Turn mobile arc left" keys="Alt Ctrl M" />
          <Command text="Turn mobile arc right" keys="Alt M" />
        </Group>

        <Group title="Barrel Rolls">
          <p>Press when a ship is selected.</p>
          <Command text="Left forward" keys="Ctrl 8" />
          <Command text="Left backward" keys="Ctrl Shift 8" />
          <Command text="Right forward" keys="Alt 8" />
          <Command text="Right backward" keys="Alt Shift 8" />
          <Command text="Place template left" keys="Ctrl R" />
          <Command text="Place template right" keys="Alt R" />
        </Group>

        <Group title="Ship Icons">
          <p>
            Press when a ship is selected to toggle the action and status icons
            on the ship token.
          </p>
          <Command text="Cycle action 1" keys="Shift A" />
          <Command text="Clear action 1" keys="Shift Z" />
          <Command text="Cycle action 2" keys="Ctrl A" />
          <Command text="Clear action 2" keys="Ctrl Z" />
          <Command text="Cycle action 3" keys="Ctrl Shift A" />
          <Command text="Clear action 3" keys="Ctrl Shift Z" />
          <Command text="Toggle target lock" keys="Shift L" />
          <Command text="Add ion" keys="Shift I" />
          <Command text="Remove ion" keys="Ctrl Shift I" />
          <Command text="Add crit" keys="Shift C" />
          <Command text="Remove crit" keys="Ctrl Shift C" />
          <Command text="Add stress" keys="Shift S" />
          <Command text="Remove stress" keys="Ctrl Shift S" />
        </Group>

        <Group title="Bombs">
          <p>
            To place a bomb, select a ship and spawn a bomb spawner. Then select
            the bomb spawner and press the correct keys to spawn a bomb. To drop
            a cargo token there's no need to create a bomb spawner first. You
            can drop it straight from the ship.
          </p>
          <Command text="Place bomb spawner" keys="Ctrl B" />
          <Command text="Seismic Charges" keys="Ctrl S" />
          <Command text="Proximity Mines" keys="Ctrl M" />
          <Command text="Proton Bombs" keys="Ctrl P" />
          <Command text="Cluster Mines" keys="Ctrl L" />
          <Command text="Conner Net" keys="Ctrl O" />
          <Command text="Ion Bombs" keys="Ctrl I" />
          <Command text="Bomblet" keys="Ctrl B" />
          <Command text="Cargo" keys="Alt Ctrl Shift C" />
        </Group>

        <Group title="Obstacles">
          <p>Press when an obstacle is selected.</p>
          <Command text="Free Rotate" keys="Ctrl R" />
          <Command text="Toggle Range" keys="Ctrl L" />
        </Group>
      </div>
    );
  }
}

export default App;

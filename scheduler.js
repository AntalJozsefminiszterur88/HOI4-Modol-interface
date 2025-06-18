// Unorthodox scheduler implementation to handle profile reset by power cycling
// Simulates LED color profiles where the last profile's color persists
// unless the device is turned off and on again.

const profiles = [
  {
    id: 0,
    name: 'Alapértelmezett',
    color: 'Kek', // default color
    durationMs: 1000
  },
  {
    id: 1,
    name: 'Profile 1',
    color: 'Piros',
    durationMs: 1000
  },
  {
    id: 2,
    name: 'Profile 2',
    color: 'Feher',
    durationMs: 1000
  }
];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function powerOff() {
  console.log('Powering off...');
  // Here you would send command to turn the LEDs off
  await delay(500);
}

async function powerOn() {
  console.log('Powering on...');
  // Here you would send command to turn the LEDs on
  await delay(500);
}

async function applyColor(color) {
  console.log(`Applying color: ${color}`);
  // Here you would send command to set the LED color
  await delay(500);
}

async function runProfiles() {
  while (true) {
    for (let i = 0; i < profiles.length; i++) {
      const p = profiles[i];
      console.log(`Starting ${p.name}`);
      await applyColor(p.color);
      await delay(p.durationMs);
      if (i === profiles.length - 1) {
        // Unorthodox fix: mimic manual power cycle before restarting
        await powerOff();
        await powerOn();
        // Immediately apply first profile color so scheduler restarts correctly
        await applyColor(profiles[0].color);
      }
    }
  }
}

runProfiles();

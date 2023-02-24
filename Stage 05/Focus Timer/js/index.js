import { Timer } from './timer.js'
import { Controls } from './controls.js'
import Sounds from './sounds.js'
import Events from './events.js'
import {
  buttonPauser,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
} from "./element.js"


const configControls = {
  buttonPlay,
  buttonPauser,
  buttonSet,
  buttonStop,
}; 

const controls = Controls(configControls);

const configTimer = {
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
};

const timer = Timer(configTimer)

const sound = Sounds()

Events({ controls, timer, sound })


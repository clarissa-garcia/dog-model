import {
  EightHundreds,
  FiveHundreds,
  FourHundreds,
  Hundreds,
  NineHundreds,
  OneHundredThousands,
  OneThousands,
  SevenHundreds,
  SixHundreds,
  ThreeHundreds,
  TwoHundreds,
} from "../json/jsonImport";

import HundredsPic from "./layer1.png";
import TwoHundredsPic from "./layer2.png";
import ThreeHundredsPic from "./layer3.png";
import FourHundredsPic from "./layer4.png";
import FiveHundredsPic from "./layer5.png";
import SixHundredsPic from "./layer6.png";
import SevenHundredsPic from "./layer7.png";
import EightHundredsPic from "./layer8.png";
import NineHundredsPic from "./layer9.png";
import OneThousandsPic from "./layer10.png";
import OneHundredThousandsPic from "./layer11.png";

export const ButtonImageContainer = [
{
  buttonName: "Deep Internal Muscles",
  imageName: HundredsPic,
  textField: Hundreds,
},
{
  buttonName: "Deep Trunk Muscles",
  imageName: TwoHundredsPic,
  textField: TwoHundreds,
},
{
  buttonName: "Spinal and Ear Muscles",
  imageName: ThreeHundredsPic,
  textField: ThreeHundreds,
},
{
  buttonName: "Facial and Back Muscles",
  imageName: FourHundredsPic,
  textField: FourHundreds,
},
{
  buttonName: "Intermediate Trunk Muscles",
  imageName: FiveHundredsPic,
  textField: FiveHundreds,
},
{
  buttonName: "Superficial Head and Neck",
  imageName: SixHundredsPic,
  textField: SixHundreds,
},
{
  buttonName: "Medial Limb Muscles — Superficial",
  imageName: SevenHundredsPic,
  textField: SevenHundreds,
},
{
  buttonName: "Medial Limb Muscles — Deep",
  imageName: EightHundredsPic,
  textField: EightHundreds,
},
{
  buttonName: "Lateral Limb Muscles — Deep",
  imageName: NineHundredsPic,
  textField: NineHundreds,
},
{
  buttonName: "Lateral Limb Muscles — Intermediate",
  imageName: OneThousandsPic,
  textField: OneThousands,
},
{
  buttonName: "Lateral Limb and Trunk Muscles — Superficial",
  imageName: OneHundredThousandsPic,
  textField: OneHundredThousands,
},
];

export default ButtonImageContainer;

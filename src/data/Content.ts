import { GameData } from "components/playerBridge/GameData";

export interface Content {
  mapJson: string,
  situations: { [key: string]: Situation }
  scenarios: { [key: string]: Scenario }
  finder?: FinderContent
}

export enum Mode {
  scenario = "scenario",
  finder = "finder"
}

export interface FinderContent {
    situations: string[];
    final: ContentConfig;
}

export interface ContentConfig {
  url: string
  data: GameData<any>
}

export interface Situation {
  url: string;
  title: string;
  // todo: inner game config!?
}

export interface Scenario {
  location: number[];
  title: string;
  imageBaseUrl: string;
  description: string;
  sequence: SequenceItem[];
  scene: SceneElement[];
  situationSpeech: string;
  options: string[];
  reactions: ConflictReaction[];
}

// Something on the scene
export interface SceneElement {
  image?: string;
  position?: [number, number];
  scale?: number;
  flipped: boolean;
}

export interface ConflictReaction { 
  correct: boolean, 
  text: string, 
  scene: SceneElement[]; 
  confirmText: string,
  yesText: string;
  noText: string;
  confirmImage?: string 
}

export enum SequenceItemType {
  caption = 'caption',
  speech = 'speech',
  image = 'image',  // image, no speech
}

export interface SequenceItem {
  type: SequenceItemType,
  text: string,
  balloonArrowPos?: number;
  
  scene?: SceneElement[]; // optional override
}

// Something

// export interface ConflictContent {
//   description: string;
//   sequence: SequenceItem[];
//   scene: SceneElement[];
//   situationSpeech: string;
//   options: string[];
//   reactions: ConflictReaction[];
// }

// export interface SceneElement {
//   image?: string;
//   type?: SceneElementType;
//   position?: [number, number];
//   scale?: number;
//   flipped: boolean;
//   pose: AvatarPose;
// }

// export enum SceneElementType {
//   sprite = "sprite",
//   avatar = "avatar",
// }

// export enum AvatarPose {
//   angle = "angle",
//   front = "front",
//   side = "side",
//   angry = "angry"
// }

// export interface ConflictReaction { 
//   correct: boolean, 
//   text: string, 
//   scene: SceneElement[]; 
//   confirmText: string,
//   yesText: string;
//   noText: string;
//   confirmImage?: string 
// }

// export enum SequenceItemType {
//   caption = 'caption',
//   speech = 'speech',
//   image = 'image',  // image, no speech
// }

// export interface SequenceItem {
//   type: SequenceItemType,
//   text: string,
//   balloonArrowPos?: number;
  
//   scene?: SceneElement[]; // optional override
// }
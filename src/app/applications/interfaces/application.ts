import { IAvailability } from "./availability";
import { IQuestion } from "./question";

export interface IApplication {
    "id": number;
    "name": string;
    "position": string;
    "applied": string;
    "experience": number;
    "availability": IAvailability;
    "questions": IQuestion[];
}

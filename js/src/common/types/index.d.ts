import TrackerService from "../../core/tracker/trackerService";

export {};

declare global {
  interface Window {
    trackerService: TrackerService;
  }
}
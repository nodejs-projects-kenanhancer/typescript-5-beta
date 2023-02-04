type Loading = { state: "loading" };

type Failed = { state: "failed"; status: number };

type Success = { state: "success"; result: any };

type State = Loading | Failed | Success;

function request(state: State): string {
  switch (state.state) {
    case "loading":
      return "Uploading...";
    case "failed":
      return `Error status: ${state.status}, while uploading`;
    case "success":
      return `Uploaded to cloud: ${state.result}`;
  }
}

export {};

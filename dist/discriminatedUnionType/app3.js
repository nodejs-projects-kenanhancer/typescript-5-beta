function request(state) {
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
//# sourceMappingURL=app3.js.map
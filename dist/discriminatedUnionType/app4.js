function writeToFile(response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.content);
}
export {};
//# sourceMappingURL=app4.js.map
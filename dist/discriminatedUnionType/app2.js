function handleEvent(event) {
    switch (event.kind) {
        case "click":
            console.log(`Mouse clicked at (${event.x}, ${event.y})`);
            break;
        case "keypress":
            console.log(`Key pressed: (key=${event.key}, code=${event.code})`);
            break;
        case "focus":
            console.log(`Focused element: ${event.element.tagName}`);
            break;
    }
}
export {};
//# sourceMappingURL=app2.js.map
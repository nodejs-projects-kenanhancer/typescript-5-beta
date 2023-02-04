function info(contact) {
    if ("message" in contact) {
        return contact.message;
    }
    return contact.text;
}
export {};
//# sourceMappingURL=app5.js.map
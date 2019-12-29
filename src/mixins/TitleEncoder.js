const titleEncoder = {
    methods: {
        encodeTitle(title) {
            // remove special characters
            const noSpecialChars = title.replace(/[^a-zA-Z ]/g, "");
            // convert spaces to dashes
            const dashed = noSpecialChars.replace(/ /g, '-');
            
            return dashed;
        },
        decodeTitle(title) {
            // this method won't return the special chars.
            return title.replace(/-/g, " ")
        }
    }
}

export default titleEncoder;
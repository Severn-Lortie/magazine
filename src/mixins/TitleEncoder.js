const titleEncoder = {
    methods: {
        encodeTitle(title) {
            // remove special characters
            const noSpecialChars = title.replace(/[^a-zA-Z ]/g, "");
            // convert spaces to dashes
            const dashed = noSpecialChars.replace(/ /g, '-');
            
            return dashed;
        }
    }
}

export default titleEncoder;
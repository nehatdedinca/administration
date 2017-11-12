export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName 
        };
    });
}

export function coursesFormattedForDropdown(courses) {
    return courses.map(course => {
        return {
            value: course.id,
            text: course.title 
        };
    });
}
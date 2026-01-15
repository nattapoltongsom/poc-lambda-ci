export const getUserFromDb = async (id: string) => {
    return {
        id: id,
        name: "John Doe",
        email: "john@example.com",
        source: "AWS Lambda via Adapter"
    };
};
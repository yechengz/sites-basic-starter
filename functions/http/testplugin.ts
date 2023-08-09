export async function main() {
    return {
        statusCode: 200,
        headers: {
            "Cache-Control": "no-cache",
        },
        body: "test"
    }
}
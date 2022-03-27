export default async (req, res) => {

    if (req.method === "GET") {
        try {


            res.statusCode = 200;
            return res.json();
        } catch (e) {
            // 5
            res.statusCode = 404;
            return res.json({
                error: ` not found. Tip: Double check the spelling.`,
            });
        }
    }
};


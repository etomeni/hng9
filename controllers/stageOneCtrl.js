
// get All Active Ticket Ctr
export const stage1Ctr = async (req, res, next) => {

    try {

        return res.status(201).json({
            status: 200,
            slackUsername: "sundaywht",
            backend: true,
            age: 27,
            bio: "I'm a full-stack software developer specialised in frontend and backend development for complex scalable apps. I've been developing since 2019, am Keen on learning more, expanding my skills and knowledge, collaborating and sharing knowledge with people.",
        });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

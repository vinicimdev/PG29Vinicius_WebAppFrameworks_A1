import express, { type Request, type Response } from "express";
import cors from "cors";

type LeaderboardItem = {
    player: string;
    score: number;
};

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req: Request, res: Response) => {
    res.json({ message: "OK" });
});

app.get("/api/leaderboard-summary", (req: Request, res: Response) => {
    const summaryData: LeaderboardItem[] = [
    { player: "Evelyn", score: 7823 },
    { player: "Vi", score: 5421 },
    { player: "Kiran", score: 9234 },
    { player: "Spencer", score: 3456 },
    { player: "Raf", score: 8765 },
    { player: "Cris", score: 4321 },
    { player: "Julian2", score: 9876 },
    { player: "Dylan", score: 2145 },
    { player: "Vini", score: 6789 },
    { player: "Nick", score: 5432 },
    { player: "Diana", score: 7654 },
    { player: "Yeison", score: 3987 },
    { player: "Julian1", score: 8234 },
    { player: "Tobias", score: 4765 },
    { player: "Ken", score: 6543 },
    { player: "Felipe", score: 5678 },
    { player: "Tyler", score: 7432 },
];

    res.json(summaryData);
});

app.listen(PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`);
});

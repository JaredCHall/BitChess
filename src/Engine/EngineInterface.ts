export interface EngineInterface {
    command: Deno.Command
    process: Deno.ChildProcess

    setFen(fen: string): Promise<void>
    setSkillLevel(elo: number): Promise<void>
    getBestMove(): Promise<string>
    getEval(): Promise<number>
    perft(depth: number): Promise<number>

}
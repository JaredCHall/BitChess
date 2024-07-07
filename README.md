# BitChess
BitChess is a robust, headless chess game engine designed for seamless integration with various user interfaces. Whether you're developing a visually appealing desktop application or a responsive web interface, BitChess provides a solid foundation with its comprehensive game representation and manipulation capabilities.

While the primary goal of BitChess is to offer a dependable backend for chess applications, a significant part of the project's joy comes from its performance optimization. The engine is fine-tuned to excel in performance tests, particularly in calculating perft benchmarks. While it cannot compete with established engines, in this hobbyist's opinion, it is pretty darn fast for Javascript. [Benchmarking](/benchmarks/benchmark-results.txt) shows this app generates legal moves 3x faster than Deno Chess and 4x faster than Chess.js.

Features:
- Game Engine which can be wired up to a UI
- Interfaces with popular chess engines:
  - Stockfish
  - Leela (pending)
  - Ethereal (pending)
  - Rustic Chess (pending)
- Support for FEN numbers and PGN files
- Local position database powered by sqlite (pending)
- Play against an engine in the Console
- Watch engines battle other engines in the Console  (pending)
- Accuracy and Performance testing

## Documentation
 - [Game Api](docs/GameApi.md) - For wiring up a UI
 - [Console Interface](docs/ConsoleInterface.md) - Example Console Implementation
 - [Performance Tests](docs/PerformanceTesting.md) - All about Performance Testing

## Usage
- `deno task battle` - Watch battle between two chess engines
- `deno task play` - Play against an AI engine in the console
- `deno task perft` - Calculate number of possible moves from given position at depth n


## Installation - (Development and Testing)

1. Install Deno
2. Clone the repo

## Dev Tasks

- `deno task postinstall` - installs git-hooks to run unit tests and generate test coverage reports.
- `deno task benchmark` - runs benchmarking comparing perft speed with other engines
- `deno task stats` - displays test coverage and benchmarking statistics
- `deno task test` - runs all tests
- `deno task test-unit` - runs unit tests
- `deno task test-integration` - runs integration tests
- `deno task test-coverage` - runs unit tests and updates test coverage
- `deno task test-coverage-html` - launches browser window displaying Deno-generated static HTML page with test coverage details

## CI Pipeline Rules

- `pre.commit` (all branches) - must pass unit tests and update test coverage
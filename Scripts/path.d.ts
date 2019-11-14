// Type definitions for Path
interface Path {
    listen(): void;
    root(string): void;
    map(string): map;
    rescue(obj): void;
}

interface map {
    to(obj): void;
}

declare var Path: Path;
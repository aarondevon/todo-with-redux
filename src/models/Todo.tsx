
export default class Todo {
    private todoText: string;
    private category: string;
    private inEdit: boolean;
    private completed: boolean;
    private id: string | null;

    constructor(todoText: string, category: string, inEdit: boolean, completed: boolean, id: string | null) {
        this.todoText = todoText;
        this.category = category;
        this.inEdit = inEdit;
        this.completed = completed;
        this.id = id;
    }

    setText (todoText: string) {
        this.todoText = todoText;
    }

    setCategory (category: string) {
        this.category = category;
    }

    setInEdit (inEdit: boolean) {
        this.inEdit = inEdit;
    }

    setCompleted (completed: boolean) {
        this.completed = completed;
    }

    getText(): string {
        return this.todoText;
    }

    getCategory() {
        return this.category;
    }

    getInEdit(): boolean {
        return this.inEdit;
    }

    getCompleted(): boolean {
        return this.completed;
    }

    getId(): any {
        return this.id;
    }
}


export default class Todo {
    private text: string;
    private category: string;
    private inEdit: boolean;
    private completed: boolean;
    private id: string;

    constructor(text: string, category: string, inEdit: boolean, completed: boolean, id: string) {
        this.text = text;
        this.category = category;
        this.inEdit = inEdit;
        this.completed = completed;
        this.id = id;
    }

    setText (text: string) {
        this.text = text;
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
        return this.text;
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

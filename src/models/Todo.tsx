
export default class Todo {
    private text: string;
    private inEdit: boolean;
    private completed: boolean;
    private id: string;

    constructor(text: string, inEdit: boolean, completed: boolean, id: string) {
        this.text = text;
        this.inEdit = inEdit;
        this.completed = completed;
        this.id = id;
    }

    setText (text: string) {
        this.text = text;
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

import React, { FormEvent, ChangeEventHandler, FormEventHandler } from "react"

export interface TodoObject {
    id: string | null;
    entry: string;
    isCompleted: boolean;
}

interface Operations {
    onChange: ChangeEventHandler;
    onDelete: (e: FormEvent, id: string) => void;
    onSubmit: FormEventHandler;
    onUpdate: (e: FormEvent, id: string) => void;
    onSelect: (value: TodoObject) => void;
    refetch: () => void;
    values: TodoObject;
}

export interface TodoListItemProps extends Operations {
    data: TodoObject;    
}

import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test ("status from props should be in the state", () => { //наявність статуса
        const component = create(<ProfileStatus status = "antibiotic"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("antibiotic");
    });

    test ("must be show span after render", () => { //після рендеру має бут span 
        const component = create(<ProfileStatus status = "antibiotic"/>);
        const root = component.root;
        const span  = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test ("must be not show input after render", () => { //після рендеру не має бут input 
        const component = create(<ProfileStatus status = "antibiotic"/>);
        const root = component.root;
        
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    test ("most be correct text in the span", () => { //текст в span повинен відповідати тому що прийшов в props
        const component = create(<ProfileStatus status = "antibiotic"/>);
        const root = component.root;
        const span  = root.findByType("span");
        expect(span.children[0]).toBe("antibiotic");
    });

    test ("after onDoubleClick span must be instead to input (editMode)", () => { 
        const component = create(<ProfileStatus status = "antibiotic"/>);
        const root = component.root;
        const span  = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");//покаже чи є input
        expect(input.props.value).toBe("antibiotic"); // текст input має бути той що в пропсі
    });

    test ("called callback funk updateUserStatus after edit mode", () => { //перевыряємо чи викликається updateUserStatus після того як деактивували editMode
        const fakeFunc = jest.fn(); // фейкова функція
        const component = create(<ProfileStatus status = "antibiotic" updateUserStatus = { fakeFunc }/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(fakeFunc.mock.calls.length).toBe(1) // довжина викликів = 1 тобто визвалась
    });
});
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Items, ITEMS as mockData } from "./App";

describe("<Items />", () => {
    it("should render a list of items", () => {
        const { getByRole, getAllByRole } = render(
            <Items items={mockData} selectedItems={[]} />
        );

        expect(getByRole("list")).toBeInTheDocument();
        expect(getAllByRole("listitem")).toHaveLength(mockData.length);
    });

    describe("should have an opportunity to select/deselect each item", () => {
        const onChangeHandler = jest.fn();

        it("should fire event with selected value", () => {
            const { getByRole } = render(
                <Items items={mockData} selectedItems={[]} onChange={onChangeHandler} />
            );

            const checkbox = getByRole("checkbox", { name: mockData[0].name, checked: false });
            fireEvent.click(checkbox);

            expect(onChangeHandler).toHaveBeenCalledWith([
                mockData[0]._id
            ]);
        });

        it("should fire event with deselected value", () => {
            const { getByRole } = render(
                <Items items={mockData} selectedItems={[mockData[0]._id]} onChange={onChangeHandler} />
            );

            const checkbox = getByRole("checkbox", { name: mockData[0].name, checked: true });
            fireEvent.click(checkbox);

            expect(onChangeHandler).toHaveBeenCalledWith([]);
        });
    });

    describe("should support multi-selection of elements", () => {
        describe('should select multiple items', () => {
            const onChangeHandler = jest.fn();

            it("0 checked - click on 1 item -> fire only this value", () => {
                const { getByRole } = render(
                    <Items items={mockData} selectedItems={[]} onChange={onChangeHandler} />
                );

                const firstItemCheckbox = getByRole("checkbox", { name: mockData[0].name });
                fireEvent.click(firstItemCheckbox, { shiftKey: true });
                expect(onChangeHandler).toHaveBeenCalledWith([mockData[0]._id]);
            });

            it("0 checked - click on 2+ item -> fire with values from 1 to checked value", () => {
                const [firstItem, secondItem, thirdItem ] = mockData;

                const { getByRole } = render(
                    <Items items={mockData} selectedItems={[]} onChange={onChangeHandler} />
                );

                const thirdItemCheckbox = getByRole("checkbox", { name: thirdItem.name });
                fireEvent.click(thirdItemCheckbox, { shiftKey: true });
                expect(onChangeHandler).toHaveBeenCalledWith([firstItem._id, secondItem._id, thirdItem._id ]);
            });

            it("first checked - click on 2 item -> fire with first and 2 values", () => {
                const [firstItem, secondItem ] = mockData;
                const { getByRole } = render(
                    <Items items={mockData} selectedItems={[firstItem._id]} onChange={onChangeHandler} />
                );

                const secondItemCheckbox = getByRole("checkbox", { name: secondItem.name });
                fireEvent.click(secondItemCheckbox, { shiftKey: true });
                expect(onChangeHandler).toHaveBeenCalledWith([firstItem._id, secondItem._id]);
            });

            it("first checked - click on 2+ item -> fire with values from 1 to checked value", () => {
                const [firstItem, secondItem, thirdItem, fourthItem ] = mockData;
                const { getByRole } = render(
                    <Items items={mockData} selectedItems={[firstItem._id]} onChange={onChangeHandler} />
                );

                const fourthItemCheckbox = getByRole("checkbox", { name: fourthItem.name });
                fireEvent.click(fourthItemCheckbox, { shiftKey: true });
                expect(onChangeHandler).toHaveBeenCalledWith([firstItem._id, secondItem._id, thirdItem._id, fourthItem._id]);
            });

            it("first checked - click on last item -> fire with all values", () => {
                const [firstItem] = mockData;
                const { getByRole } = render(
                    <Items items={mockData} selectedItems={[firstItem._id]} onChange={onChangeHandler} />
                );

                const lastItemCheckbox = getByRole("checkbox", { name: mockData[mockData.length - 1].name });
                fireEvent.click(lastItemCheckbox, { shiftKey: true });
                expect(onChangeHandler).toHaveBeenCalledWith(mockData.map(({ _id }) => _id));
            });

        });
    });
});

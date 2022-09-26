import { useState } from "react";

import "./styles.css";

/*
 * You have 1 hour to finish 1-2.
 * Total time is 1.5 hour.
 * You can use google search without explicit searching the answers
 of the task.
 * The UI does not need to be beautiful.
 * You can't use any libraries.
 * Yop should edit all components as necessary.
  Tasks:
   1. Display items information on the page.
   2. Add a select option to each item.
      On clicking 'delete' the selected items
      should be removed (from the state).
   3. Implement multi select with Shift key:
      Clicking on an item then clicking on another
      item with the shift key pressed it will
      select\deselect all items in between them.
   4. Implement multi unselect with Shift key
*/

export default function App() {
    const [items, setItems] = useState(ITEMS);
    const [selected, setSelected] = useState([]);

    const onItemsChangeHandler = (ids) => {
       setSelected(ids);
    };

    const onDeleteHandler = () => {
        setItems(items.filter((item) => !selected.includes(item)));
    };

    return (
        <div className="App">
            <div className="title"> React Select Challenge </div>

            <DeleteButton onClick={onDeleteHandler} />
            <Items
                items={items}
                selectedItems={selected}
                onChange={onItemsChangeHandler}
            />
        </div>
    );
}

export const Items = ({ items, selectedItems, onChange }) => {
    const onChangeHandler = (e) => {
        const { value, checked } = e.target;
        const isShiftHold = e.nativeEvent.shiftKey;

        const findById = (id) => (items) => items._id === id;
        const pickId = (items) => items._id;
        const pullAll = (values) => (id) => !values.includes(id);

        if (isShiftHold) {
            const currentElementIdx = items.findIndex(findById(value));
            const previousElementIdx = items.findIndex(findById(selectedItems[selectedItems.length - 1]));

            const startPositionIdx = previousElementIdx > -1 ? previousElementIdx : 0;
            const start = currentElementIdx < startPositionIdx ? currentElementIdx : startPositionIdx;
            const end = currentElementIdx < startPositionIdx ? startPositionIdx : currentElementIdx;

            const ids = items.slice(start, end + 1).map(pickId);

            const values = checked ? [
                ...selectedItems,
                ...ids.filter(pullAll(selectedItems)),
            ] : selectedItems.filter(pullAll(ids));

            onChange(values);
        } else {
            onChange(
                checked ? [...selectedItems, value] : selectedItems.filter(i => i !== value)
            );
        }
    };

    return (
        <div className="items">
            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        <input
                            type="checkbox"
                            name="items"
                            value={item._id}
                            id={"items_" + item._id}
                            checked={selectedItems.includes(item._id)}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor={"items_" + item._id}>{item.name}</label>{" "}
                        <a href={"mailto:" + item.email}>{item.email}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const DeleteButton = ({ onClick }) => {
    return (
        <button className="DeleteButton btn btn-primary" onClick={onClick}>
            Delete Selected Items
        </button>
    );
};

// DO NOT MODIFY BELOW CODE
export const ITEMS = [
    {
        _id: "62863ccd8b7762a11832b6af",
        name: "Frank Bell",
        email: "frank.b@gmail.zzz"
    },
    {
        _id: "62863ccd8b7762377b32b6b1",
        name: "Kevin Edwards",
        email: "kevin.e@gmail.zzz"
    },
    {
        _id: "62863ccd8b7762b7c732b6b2",
        name: "Jose Reed",
        email: "jose.r@gmail.zzz"
    },
    {
        _id: "62863ccd8b7762dc2632b6b3",
        name: "Jayne Robinson",
        email: "jayne.r@gmail.zzz"
    },
    {
        _id: "62863ccd8b7762278132b6b4",
        name: "Chris Zimmer",
        email: "chris.z@gmail.zzz"
    },
    {
        _id: "62863ccd8b7762517232b6b5",
        name: "George Thomas",
        email: "george.t@gmail.zzz"
    },
    {
        _id: "62863ccd8b77625fd032b6b8",
        name: "Ian Davidson",
        email: "ian.d@gmail.zzz"
    },
    {
        _id: "62863ccd8b77620ae432b6b9",
        name: "Keith Dulwich",
        email: "keith.d@gmail.zzz"
    },
    {
        _id: "62863ccd8b776229fd32b6bc",
        name: "Mark Wilson",
        email: "mark.w@gmail.zzz"
    },
    {
        _id: "62863ccd8b7762509332b6bf",
        name: "David Wilson",
        email: "david.wilson@gmail.zzz"
    },
    {
        _id: "62863ccd8b776272d432b6c0",
        name: "Antony Hill",
        email: "antony.h@gmail.zzz"
    },
    {
        _id: "62863ccd8b77622eaa32b6c1",
        name: "Ronald Nelson",
        email: "ronald.n@gmail.zzz"
    },
    {
        _id: "62863ccd8b7762f53132b6c3",
        name: "Dyna Ward",
        email: "dyna.w@gmail.zzz"
    },
    {
        _id: "62863ccd8b7762574532b6c5",
        name: "David Thomas",
        email: "thomas.d@gmail.zzz"
    },
    {
        _id: "62863ccd8b77620a1f32b6c6",
        name: "John Dsouza",
        email: "john.d@gmail.zzz"
    },
    {
        _id: "62863ccd8b776278eb32b6c8",
        name: "Nancy Woods",
        email: "nancy.w@gmail.zzz"
    },
    {
        _id: "62f273e55cf05b50f05b79f0",
        name: "Dustin Valente",
        email: "dustin@visitt.io"
    },
    {
        _id: "62f273e55cf05b98a65b79ec",
        name: "Gerald Drummond",
        email: "geraldd@mail.visitt"
    },
    {
        _id: "62f273e55cf05baa2e5b79e8",
        name: "John Smith",
        email: "visitt_demo_contact1@mail.visitt"
    },
    {
        _id: "62f273e55cf05bfb275b79ee",
        name: "Joe Smith",
        email: "smith@mail.visitt"
    },
    {
        _id: "62f273e55cf05b63fd5b79ef",
        name: "Jin Drummond",
        email: "jind@mail.visitt"
    },
    {
        _id: "62f273e55cf05b392f5b79e9",
        name: "Will Anderson",
        email: "visitt_demo_contact2@mail.visitt"
    },
    {
        _id: "62f273e55cf05bf31f5b79ea",
        name: "James Anderson",
        email: "visitt_demo_contact3@mail.visitt"
    },
    {
        _id: "62f273e55cf05b97795b79eb",
        name: "Jose McDonald",
        email: "josem@gmail.visitt"
    },
    {
        _id: "62f273e55cf05bed455b79ed",
        name: "Joe Taylor",
        email: "joejtaylor@rhyta.visitt"
    }
];

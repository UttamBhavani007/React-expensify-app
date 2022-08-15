import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD Expanse
const addExpanse = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPANSE",
  expanse: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// Remove Expanse

const removeExpanse = ({ id } = {}) => ({
  type: "REMOVE_EXPANSE",
  id,
});

//Edit Expanse

const editExpanse = (id, update) => ({
  type: "EDIT_EXPANSE",
  id,
  update,
});

// SET Text Filter

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate,
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate,
});

//Expanses Reducer

const expansesReducerDefaultState = [];

const expansesReducer = (state = expansesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPANSE":
      return [...state, action.expanse];
    case "REMOVE_EXPANSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPANSE":
      return state.map((expanse) => {
        if (expanse.id === action.id) {
          return {
            ...expanse,
            ...action.update,
          };
        } else {
          return expanse;
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

// get visible expanses
const getVisibleExpanses = (expanses, { text, sortBy, startDate, endDate }) => {
  return expanses
    .filter((expanse) => {
      const startDateMatch =
        typeof startDate !== "number" || expanse.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expanse.createdAt <= endDate;
      const textMatch = expanse.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//Store creation

const store = createStore(
  combineReducers({
    expanses: expansesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpanses = getVisibleExpanses(state.expanses, state.filters);
  console.log(visibleExpanses);
});

const expanseOne = store.dispatch(
  addExpanse({ description: "Rent", amount: 100, createdAt: -21000 })
);
const expanseTwo = store.dispatch(
  addExpanse({ description: "Coffee", amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpanse({ id: expanseOne.expanse.id }));

// store.dispatch(editExpanse(expanseTwo.expanse.id, { amount: 500 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate()); //date

// store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // satrtDate undefined

// store.dispatch(setEndDate(125)); // endDate 1250
// store.dispatch(setEndDate()); // endDate undefined

const demoState = {
  expanses: [
    {
      id: "cjnjcnzcvc",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54000,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

const user = {
  name: "Uttam",
  age: 20,
};

// console.log({
//   age: 21,
//   ...user,
//   location: "Surat",
// });

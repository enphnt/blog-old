---
path: "/react-hooks"
date: "2022-12-12T17:17:33.962Z"
title: "Pop Quiz: What hooks do you know?"
---

Recently, I spoke to a recruiter who was getting to know me. He's a super nice guy and we got along well. As we got deeper into the conversation, he asked me which hooks I've been using in my react development. To be honest, I drew a blank, "uh, you mean useState?"

It wasn't a big deal that I didn't know. But now, I'm left wondering what all these glorious new hooks are that I can incorporate into my product. Ideally, I'll discover some ways to reduce some clutter and toss out some existing old-school React code snippers in favour of a hook.

### What are these again?
The main idea is that hooks (since v16.8) let you use state and 'other' features without writing a class. In other words, FunctionComponents get the benefits of Class components.

The motiation is that class components become unweildy and its hard to share logic between them. So hooks comes in as a much more direct API to get to all the React goodness without having to grasp classes or even `this`. 😅

In many ways, hooks lower the bar to entry for React and lets devs focus more on function crafting.

#### Full list of hooks with the use detailed for each:
<table>
  <tr>
    <th>Hook</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td>useState</td>
    <td>
      <pre>const [tick, setTick] = useState(0);</pre>
      <div>This hooks is the one I know most. Use it to handle 'reactive' data. When data changes state, component will rerender.</div>
    </td>
  </tr>
  <tr>
    <td>useEffect</td>
    <td>
      This one let's you tap into the React lifecycle methods:

      useEffect(() => {
        /* ComponentDidMount code */
      }, []);

      useEffect(() => {
        /* componentDidUpdate code */
      }, [var1, var2]);

      useEffect(() => {
        return () => {
        /* componentWillUnmount code */
        }
      }, []);

  Combine them all in one function:

      useEffect(() => {
        /* componentDidMount code + componentDidUpdate code */

        return () => {
        /* componentWillUnmount code */
        }
      }, [var1, var2]);

    </td>
  </tr>
  <tr>
    <td>useContext</td>
    <td>
      Want to pass data and avoid props? The example from React docs shows how we can pass the <code>value</code> from the <code>ThemeContextProvider\></code> so that its used by the child components.
      </br>
      </br>
      Child components will always consume the <code>value</code> from the nearest parent provider component.

      const themes = {
        light: {
          foreground: "#000000",
          background: "#eeeeee"
        },
        dark: {
          foreground: "#ffffff",
          background: "#222222"
        }
      };

      const ThemeContext = React.createContext(themes.light);

      function App() {
        return (
          <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
          </ThemeContext.Provider>
        );
      }

      function Toolbar(props) {
        return (
          <div>
            <ThemedButton />
          </div>
        );
      }

      function ThemedButton() {
        const theme = useContext(ThemeContext);

        return (
          <button
            style={{ background: theme.background, color: theme.foreground }}
          >
            I am styled by theme context!
          </button>
        );
      }
  </td>
  </tr>
  <tr>
    <td>useReducer</td>
    <td>
      An alternative way to set state using a reducer (<code>(state, action) => newState</code>). It returns the current state paired with a <code>dispatch</code> method. It's necessary when new state depends on old state.
      </br>
      </br>
      The shape is like this:
      </br>
      <code>
      const [state, dispatch] = useReducer(reducer, initialArg, init);
      </code>
      </br>
      </br>
      The React docs example uses a counter to demo the functionality:
      </br>
      <pre>
        const initialState = {count: 0};
      </br>
        function reducer(state, action) {
          switch (action.type) {
            case 'increment':
              return {count: state.count + 1};
            case 'decrement':
              return {count: state.count - 1};
            default:
              throw new Error();
          }
        }
      </br>
        function Counter() {
          const [state, dispatch] = useReducer(reducer, initialState);
          return (
            &lt;>
              Count: {state.count}
              &lt;button onClick={() => dispatch({type: 'decrement'})}>
                -
              &lt;/button>
              &lt;button onClick={() => dispatch({type: 'increment'})}>
                +
              &lt;/button>
            &lt;/>
          );
        }
      </pre>
  </td>
  </tr>
  <tr>
    <td>useMemo</td>
    <td>
      This one is useful for reducing performance costs of expensive functions.

      const { useState, useMemo } = React;

      const CalculateFactorial = () => {
        const [num, setNum] = useState(0);

        const getFactorial = val => {
          if (val === 0) return 1;
          return val * getFactorial(val - 1);
        };

        const calculatedFactorial = useMemo(() => {
          return num ? getFactorial(num) : 0;
        }, [num]);

        return (
          <div>
            <section className="box">
              <div>Enter a number to calculate its factorial [n(n-1)]:</div>
              <input value={num} onChange={(e) =>
                setNum(e.target.value)}
              />
            </section>
            <div className="box">Factorial: {calculatedFactorial}</div>
          </div>
        );
      }

      ReactDOM.render(<CalculateFactorial />, document.getElementById('root'));

  </br>
      In this example, the expensive calculation will only run if the num changes, thus avoiding needless expensive rerenders.
    </td>
  </tr>
  <tr>
    <td>useCallback</td>
    <td>
      Similar to <code>useMemo()</code>, useful for reducing performance costs of expensive functions.

      const { useState, useCallback } = React;

      const add = (fst, snd) => fst + snd;

      const AddTwoThingsComponent = () => {

        const [firstVal, setFirstVal] = useState(10);
        const incrementFirst = () => setFirstVal(num => num + 1);
        const decreaseFirst = () => setFirstVal(num => num - 1);

        const [secondVal, setSecondVal] = useState(20);
        const incrementSecond = () => setSecondVal(num => num + 1);
        const decreaseSecond = () => setSecondVal(num => num - 1);

        const additionResult = useCallback(add(firstVal, secondVal), [firstVal, secondVal]);

        return (
          <>
            <section className="box">
              <span>{firstVal}</span>
              <button onClick={incrementFirst}>Click to Add 1</button>
              <button onClick={decreaseFirst}>Click to Subtract 1</button>
            </section>
            <section className="box">
              <span>{secondVal}</span>
              <button onClick={incrementSecond}>Click to Add 1</button>
              <button onClick={decreaseSecond}>Click to Subtract 1</button>
            </section>
            <div className="box">Result: {additionResult}
            </div>

          </>
        )
      }

      ReactDOM.render(<MyComponent />, document.getElementById('root'))

    </td>
  </tr>
  <tr>
    <td>useRef</td>
    <td>
      So, you want to access DOM elements? or even better, you want to access prev state? Great! useRef lets you do that. In the below example, use ref is used to display the previously rendered value and doesn't rely on rerrendering to do so.

      import React, { useRef };

      export default function App() {
        const [name, setName] = useState("");
        const preName = useRef("");

        useEffect(() => {
          prevName.current = name;
        }, [name])

        return (
          <>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <div>
              Hola! Mi nombre es {name} y my nombre era {prevName}.
            </div>
          <>;
        );
      }


  </td>
  </table>
There are still more hooks to be covered. However, I'll save these for a future blog post as this is a great stopping point. The above hooks are likely the most useful in practical application. I've personally been aok using only these but I do want to understand the remaining oppportunities so will aim to continue exploring hooks in a future post.
</br>
</br>
<div>Remaining hooks:</div>
</br>

<ul>
    <li>useImperativeHandle</li>
    <li>useLayoutEffect</li>
    <li>useDebugValue</li>
    <li>useDeferredValue</li>
    <li>useTransition</li>
    <li>useId</li>
    <li>useSyncExternalStore</li>
    <li>useInsertionEffect</li>
</ul>

webpackJsonp([0xb1060e571516],{349:function(e,n){e.exports={data:{markdownRemark:{html:"<p>Recently, I spoke to a recruiter who was getting to know me. He's a super nice guy and we got along well. As we got deeper into the conversation, he asked me which hooks I've been using in my react development. To be honest, I drew a blank, \"uh, you mean useState?\"</p>\n<p>It wasn't a big deal that I didn't know. But now, I'm left wondering what all these glorious new hooks are that I can incorporate into my product. Ideally, I'll discover some ways to reduce some clutter and toss out some existing old-school React code snippers in favour of a hook.</p>\n<h3>What are these again?</h3>\n<p>The main idea is that hooks (since v16.8) let you use state and 'other' features without writing a class. In other words, FunctionComponents get the benefits of Class components.</p>\n<p>The motiation is that class components become unweildy and its hard to share logic between them. So hooks comes in as a much more direct API to get to all the React goodness without having to grasp classes or even <code>this</code>. 😅</p>\n<p>In many ways, hooks lower the bar to entry for React and lets devs focus more on function crafting.</p>\n<h4>Full list of hooks with the use detailed for each:</h4>\n<table>\n  <tr>\n    <th>Hook</th>\n    <th>Usage</th>\n  </tr>\n  <tr>\n    <td>useState</td>\n    <td>\n      <pre>const [tick, setTick] = useState(0);</pre>\n      <div>This hooks is the one I know most. Use it to handle 'reactive' data. When data changes state, component will rerender.</div>\n    </td>\n  </tr>\n  <tr>\n    <td>useEffect</td>\n    <td>\n      This one let's you tap into the React lifecycle methods:\n<pre><code>  useEffect(() => {\n    /* ComponentDidMount code */\n  }, []);\n\n  useEffect(() => {\n    /* componentDidUpdate code */\n  }, [var1, var2]);\n\n  useEffect(() => {\n    return () => {\n    /* componentWillUnmount code */\n    }\n  }, []);\n</code></pre>\n<p>  Combine them all in one function:</p>\n<pre><code>  useEffect(() => {\n    /* componentDidMount code + componentDidUpdate code */\n\n    return () => {\n    /* componentWillUnmount code */\n    }\n  }, [var1, var2]);\n\n&#x3C;/td>\n</code></pre>\n  </tr>\n  <tr>\n    <td>useContext</td>\n    <td>\n      Want to pass data and avoid props? The example from React docs shows how we can pass the <code>value</code> from the <code>ThemeContextProvider\\></code> so that its used by the child components.\n      </br>\n      </br>\n      Child components will always consume the <code>value</code> from the nearest parent provider component.\n<pre><code>  const themes = {\n    light: {\n      foreground: \"#000000\",\n      background: \"#eeeeee\"\n    },\n    dark: {\n      foreground: \"#ffffff\",\n      background: \"#222222\"\n    }\n  };\n\n  const ThemeContext = React.createContext(themes.light);\n\n  function App() {\n    return (\n      &#x3C;ThemeContext.Provider value={themes.dark}>\n        &#x3C;Toolbar />\n      &#x3C;/ThemeContext.Provider>\n    );\n  }\n\n  function Toolbar(props) {\n    return (\n      &#x3C;div>\n        &#x3C;ThemedButton />\n      &#x3C;/div>\n    );\n  }\n\n  function ThemedButton() {\n    const theme = useContext(ThemeContext);\n\n    return (\n      &#x3C;button\n        style={{ background: theme.background, color: theme.foreground }}\n      >\n        I am styled by theme context!\n      &#x3C;/button>\n    );\n  }\n</code></pre>\n  </td>\n  </tr>\n  <tr>\n    <td>useReducer</td>\n    <td>\n      An alternative way to set state using a reducer (<code>(state, action) => newState</code>). It returns the current state paired with a <code>dispatch</code> method. It's necessary when new state depends on old state.\n      </br>\n      </br>\n      The shape is like this:\n      </br>\n      <code>\n      const [state, dispatch] = useReducer(reducer, initialArg, init);\n      </code>\n      </br>\n      </br>\n      The React docs example uses a counter to demo the functionality:\n      </br>\n      <pre>\n        const initialState = {count: 0};\n      </br>\n        function reducer(state, action) {\n          switch (action.type) {\n            case 'increment':\n              return {count: state.count + 1};\n            case 'decrement':\n              return {count: state.count - 1};\n            default:\n              throw new Error();\n          }\n        }\n      </br>\n        function Counter() {\n          const [state, dispatch] = useReducer(reducer, initialState);\n          return (\n            &lt;>\n              Count: {state.count}\n              &lt;button onClick={() => dispatch({type: 'decrement'})}>\n                -\n              &lt;/button>\n              &lt;button onClick={() => dispatch({type: 'increment'})}>\n                +\n              &lt;/button>\n            &lt;/>\n          );\n        }\n      </pre>\n  </td>\n  </tr>\n  <tr>\n    <td>useMemo</td>\n    <td>\n      This one is useful for reducing performance costs of expensive functions.\n<pre><code>  const { useState, useMemo } = React;\n\n  const CalculateFactorial = () => {\n    const [num, setNum] = useState(0);\n\n    const getFactorial = val => {\n      if (val === 0) return 1;\n      return val * getFactorial(val - 1);\n    };\n\n    const calculatedFactorial = useMemo(() => {\n      return num ? getFactorial(num) : 0;\n    }, [num]);\n\n    return (\n      &#x3C;div>\n        &#x3C;section className=\"box\">\n          &#x3C;div>Enter a number to calculate its factorial [n(n-1)]:&#x3C;/div>\n          &#x3C;input value={num} onChange={(e) =>\n            setNum(e.target.value)}\n          />\n        &#x3C;/section>\n        &#x3C;div className=\"box\">Factorial: {calculatedFactorial}&#x3C;/div>\n      &#x3C;/div>\n    );\n  }\n\n  ReactDOM.render(&#x3C;CalculateFactorial />, document.getElementById('root'));\n</code></pre>\n  </br>\n      In this example, the expensive calculation will only run if the num changes, thus avoiding needless expensive rerenders.\n    </td>\n  </tr>\n  <tr>\n    <td>useCallback</td>\n    <td>\n      Similar to <code>useMemo()</code>, useful for reducing performance costs of expensive functions.\n<pre><code>  const { useState, useCallback } = React;\n\n  const add = (fst, snd) => fst + snd;\n\n  const AddTwoThingsComponent = () => {\n\n    const [firstVal, setFirstVal] = useState(10);\n    const incrementFirst = () => setFirstVal(num => num + 1);\n    const decreaseFirst = () => setFirstVal(num => num - 1);\n\n    const [secondVal, setSecondVal] = useState(20);\n    const incrementSecond = () => setSecondVal(num => num + 1);\n    const decreaseSecond = () => setSecondVal(num => num - 1);\n\n    const additionResult = useCallback(add(firstVal, secondVal), [firstVal, secondVal]);\n\n    return (\n      &#x3C;>\n        &#x3C;section className=\"box\">\n          &#x3C;span>{firstVal}&#x3C;/span>\n          &#x3C;button onClick={incrementFirst}>Click to Add 1&#x3C;/button>\n          &#x3C;button onClick={decreaseFirst}>Click to Subtract 1&#x3C;/button>\n        &#x3C;/section>\n        &#x3C;section className=\"box\">\n          &#x3C;span>{secondVal}&#x3C;/span>\n          &#x3C;button onClick={incrementSecond}>Click to Add 1&#x3C;/button>\n          &#x3C;button onClick={decreaseSecond}>Click to Subtract 1&#x3C;/button>\n        &#x3C;/section>\n        &#x3C;div className=\"box\">Result: {additionResult}\n        &#x3C;/div>\n\n      &#x3C;/>\n    )\n  }\n\n  ReactDOM.render(&#x3C;MyComponent />, document.getElementById('root'))\n\n&#x3C;/td>\n</code></pre>\n  </tr>\n  <tr>\n    <td>useRef</td>\n    <td>\n      So, you want to access DOM elements? or even better, you want to access prev state? Great! useRef lets you do that. In the below example, use ref is used to display the previously rendered value and doesn't rely on rerrendering to do so.\n<pre><code>  import React, { useRef };\n\n  export default function App() {\n    const [name, setName] = useState(\"\");\n    const preName = useRef(\"\");\n\n    useEffect(() => {\n      prevName.current = name;\n    }, [name])\n\n    return (\n      &#x3C;>\n        &#x3C;input value={name} onChange={e => setName(e.target.value)}/>\n        &#x3C;div>\n          Hola! Mi nombre es {name} y my nombre era {prevName}.\n        &#x3C;/div>\n      &#x3C;>;\n    );\n  }\n</code></pre>\n  </td>\n  </table>\nThere are still more hooks to be covered. However, I'll save these for a future blog post as this is a great stopping point. The above hooks are likely the most useful in practical application. I've personally been aok using only these but I do want to understand the remaining oppportunities so will aim to continue exploring hooks in a future post.\n</br>\n</br>\n<div>Remaining hooks:</div>\n</br>\n<ul>\n    <li>useImperativeHandle</li>\n    <li>useLayoutEffect</li>\n    <li>useDebugValue</li>\n    <li>useDeferredValue</li>\n    <li>useTransition</li>\n    <li>useId</li>\n    <li>useSyncExternalStore</li>\n    <li>useInsertionEffect</li>\n</ul>",frontmatter:{date:"December 12, 2022",path:"/react-hooks",title:"Pop Quiz: What hooks do you know?"}}},pathContext:{}}}});
//# sourceMappingURL=path---react-hooks-b3187fc956d65c202902.js.map
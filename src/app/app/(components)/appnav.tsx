export const AppNav = () => {
  return (
    <nav className="app-nav flex flex-row justify_between align-middle w-full h-52 bg-red-300">
      <ul>
        <li>
          <a href="/app">Home</a>
        </li>
        <li>
          <a href="/app/friends">Friends</a>
        </li>
        <li>
          <a href="/app/groups">Groups</a>
        </li>
        <li>
          <a href="/app/expenses">Expenses</a>
        </li>
      </ul>
    </nav>
  )
}

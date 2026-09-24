
import Header from "../Components/Header";
import { useState } from "react";

function Home() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Learn React",
            description: "Complete React basics and hooks",
            status: "Pending"
        },
        {
            id: 2,
            title: "Build CRUD App",
            description: "Create task manager using React",
            status: "Completed"
        },
        {
            id: 3,
            title: "Practice JavaScript",
            description: "Practice array methods and objects",
            status: "Pending"
        }
    ]);

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Filter + Search
    const filteredTasks = tasks.filter((task) => {
        const matchSearch = task.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchFilter =
            filter === "All" || task.status === filter;

        return matchSearch && matchFilter;
    });

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.status === "Completed"
    ).length;

    const pendingTasks = tasks.filter(
        (task) => task.status === "Pending"
    ).length;

    return (
        <div className="min-h-screen bg-gray-100 text-black">

            {/* Header */}
            <Header />

            {/* Main Container */}
            <main className="max-w-7xl mx-auto px-6 py-8">

                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">

                    <div>
                        <h1 className="text-3xl font-bold">
                            Welcome to Task Manager 👋
                        </h1>

                        <p className="text-gray-600 mt-2">
                            Manage your tasks, track your progress and stay productive.
                        </p>
                    </div>

                    {/* Add Task Button */}
                    <button
                        className="bg-blue-600 text-white px-5 py-3 rounded-lg
                        hover:bg-blue-700 transition font-medium"
                    >
                        + Add New Task
                    </button>

                </div>


                {/* Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

                    {/* Total */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <p className="text-gray-500">
                            Total Tasks
                        </p>

                        <h2 className="text-3xl font-bold mt-2">
                            {totalTasks}
                        </h2>
                    </div>


                    {/* Pending */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <p className="text-gray-500">
                            Pending Tasks
                        </p>

                        <h2 className="text-3xl font-bold mt-2 text-orange-500">
                            {pendingTasks}
                        </h2>
                    </div>


                    {/* Completed */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border">
                        <p className="text-gray-500">
                            Completed Tasks
                        </p>

                        <h2 className="text-3xl font-bold mt-2 text-green-600">
                            {completedTasks}
                        </h2>
                    </div>

                </div>


                {/* Task Section */}
                <div className="bg-white rounded-xl shadow-sm border p-6">

                    {/* Task Header */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

                        <div>
                            <h2 className="text-2xl font-bold">
                                My Tasks
                            </h2>

                            <p className="text-gray-500 mt-1">
                                View and manage your tasks
                            </p>
                        </div>


                        {/* Search */}
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border rounded-lg px-4 py-2
                            outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>


                    {/* Filters */}
                    <div className="flex gap-3 mb-6">

                        <button
                            onClick={() => setFilter("All")}
                            className={`px-4 py-2 rounded-lg ${
                                filter === "All"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100"
                            }`}
                        >
                            All
                        </button>

                        <button
                            onClick={() => setFilter("Pending")}
                            className={`px-4 py-2 rounded-lg ${
                                filter === "Pending"
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-100"
                            }`}
                        >
                            Pending
                        </button>

                        <button
                            onClick={() => setFilter("Completed")}
                            className={`px-4 py-2 rounded-lg ${
                                filter === "Completed"
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-100"
                            }`}
                        >
                            Completed
                        </button>

                    </div>


                    {/* Tasks */}
                    <div className="space-y-4">

                        {filteredTasks.length > 0 ? (

                            filteredTasks.map((task) => (

                                <div
                                    key={task.id}
                                    className="border rounded-lg p-5
                                    flex flex-col md:flex-row
                                    justify-between gap-4
                                    hover:shadow-md transition"
                                >

                                    {/* Task Information */}
                                    <div>

                                        <h3 className="text-lg font-semibold">
                                            {task.title}
                                        </h3>

                                        <p className="text-gray-600 mt-1">
                                            {task.description}
                                        </p>

                                        <span
                                            className={`inline-block mt-3 px-3 py-1
                                            text-sm rounded-full ${
                                                task.status === "Completed"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-orange-100 text-orange-700"
                                            }`}
                                        >
                                            {task.status}
                                        </span>

                                    </div>


                                    {/* Actions */}
                                    <div className="flex items-center gap-3">

                                        <button
                                            className="px-4 py-2 bg-blue-100
                                            text-blue-700 rounded-lg
                                            hover:bg-blue-200"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => deleteTask(task.id)}
                                            className="px-4 py-2 bg-red-100
                                            text-red-700 rounded-lg
                                            hover:bg-red-200"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            ))

                        ) : (

                            /* Empty State */
                            <div className="text-center py-12">

                                <div className="text-5xl mb-4">
                                    📋
                                </div>

                                <h3 className="text-xl font-semibold">
                                    No tasks found
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    Try another search or create a new task.
                                </p>

                            </div>

                        )}

                    </div>

                </div>

            </main>

        </div>
    );
}

export default Home;


import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../Store/store";
import { registerThunk } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

type FormState = {
    name: string;
    userName: string;
    email: string;
    password: string;
    role: string;
    country: string;
    avatar: File | null;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

function SignIn() {

    const location = useLocation()

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { loading, error } = useSelector(
        (state: RootState) => state.auth
    );

    const [form, setForm] = useState<FormState>({
        name: "",
        userName: "",
        email: "",
        password: "",
        role: location.state?.role || "",
        country: "",
        avatar: null,
    });

    const [preview, setPreview] = useState<string | null>(null)

    const [errors, setErrors] = useState<ErrorState>({});

    const validate = (): boolean => {
        const e: ErrorState = {};

        if (!form.name || form.name.length < 2)
            e.name = "Name must be at least 2 characters";

        if (!form.userName || /\s/.test(form.userName))
            e.userName = "Username is required (no spaces)";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            e.email = "Invalid email address";

        if (!form.password || form.password.length < 8)
            e.password = "Password must be at least 8 characters";

        if (!form.role) e.role = "Please select a role";
        if (!form.country) e.country = "Country is required";

        setErrors(e);
        return Object.keys(e).length === 0;
    };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedRole =
        form.role.charAt(0).toUpperCase() + form.role.slice(1).toLowerCase();

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("userName", form.userName);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("country", form.country);
    formData.append("role", formattedRole);

    if (form.avatar) {
        formData.append("avatar", form.avatar);
    }

    const resultAction = await dispatch(
        registerThunk(formData as any)
    );

    if (registerThunk.fulfilled.match(resultAction)) {
        navigate("/dashboard");
    }
};
    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const DEFAULT_BG =
        "https://res.cloudinary.com/dboscnm7g/image/upload/v1770548461/AUTHENTICATION_PAGE_vsonds.png";

    const CLIENT_BG =
        "https://res.cloudinary.com/dboscnm7g/image/upload/v1770667623/ChatGPT_Image_Nov_17_2025_12_44_59_PM_1_1_yw0sj2.png";

    const FREELANCER_BG =
        "https://res.cloudinary.com/dboscnm7g/image/upload/v1770667479/FREELANCERAUTH_1_1_wjt4ji.png";
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                {/* Default */}
                <img
                    src={DEFAULT_BG}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out
      ${form.role === "" ? "opacity-100" : "opacity-0"}`}
                />

                {/* Client */}
                <img
                    src={CLIENT_BG}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out
      ${form.role === "client" ? "opacity-100" : "opacity-0"}`}
                />

                {/* Freelancer */}
                <img
                    src={FREELANCER_BG}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out
      ${form.role === "freelancer" ? "opacity-100" : "opacity-0"}`}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-[420px] bg-[#fffde6] rounded-[32px] shadow-2xl px-8 py-6"
                >
                    <h2 className="text-center text-xl font-semibold mb-4">
                        Join the Hive
                    </h2>

                    {/* Avatar */}
                    <div className="flex flex-col items-center mb-4">
                        <div className="relative w-20 h-20">

                            <label className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer overflow-hidden">
                                {preview ? (
                                    <img
                                        src={preview}
                                        alt="Avatar Preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-white text-2xl">👤</span>
                                )}

                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={(e) => {
                                        const file = e.target.files?.[0] || null;

                                        if (file && file.type.startsWith("image/")) {
                                            setForm({ ...form, avatar: file });
                                            setPreview(URL.createObjectURL(file));
                                        }
                                    }}
                                />
                            </label>

                            {/* ❌ Remove Button */}
                            {preview && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPreview(null);
                                        setForm({ ...form, avatar: null });
                                    }}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full text-xs flex items-center justify-center shadow-md hover:bg-red-600 transition"
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        <span className="text-xs mt-2 text-gray-700">
                            Upload Your Image
                        </span>
                    </div>
                    {/* Fields */}
                    <div className="space-y-2 text-sm">
                        <label className="font-semibold">YOUR NAME</label>
                        <input
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Name"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                        />
                        {errors.name && (
                            <p className="text-xs text-red-500">{errors.name}</p>
                        )}

                        <label className="font-semibold">Choose your User Name</label>
                        <input
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="UserName"
                            value={form.userName}
                            onChange={(e) =>
                                setForm({ ...form, userName: e.target.value })
                            }
                        />
                        {errors.userName && (
                            <p className="text-xs text-red-500">{errors.userName}</p>
                        )}

                        <label className="font-semibold">Email</label>
                        <input
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                        {errors.email && (
                            <p className="text-xs text-red-500">{errors.email}</p>
                        )}

                        <label className="font-semibold">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Password"
                            value={form.password}
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                        />
                        {errors.password && (
                            <p className="text-xs text-red-500">{errors.password}</p>
                        )}

                        <label className="font-semibold">SignIn as</label>
                        <select
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={form.role}
                            onChange={(e) =>
                                setForm({ ...form, role: e.target.value })
                            }
                        >
                            <option value="" className="text-gray-500">Select any option</option>
                            <option value="freelancer">Freelancer</option>
                            <option value="client">Client</option>
                        </select>
                        {errors.role && (
                            <p className="text-xs text-red-500">{errors.role}</p>
                        )}

                        <label className="font-semibold">Country</label>
                        <input
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Country"
                            value={form.country}
                            onChange={(e) =>
                                setForm({ ...form, country: e.target.value })
                            }
                        />
                        {errors.country && (
                            <p className="text-xs text-red-500">{errors.country}</p>
                        )}
                    </div>

                    {/* Google icon */}
                    <div className="flex justify-center my-3">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
                            alt="Google"
                            className="w-6 h-6"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition disabled:opacity-50"
                    >
                        {loading ? "Creating Account..." : "SignIn into Hive"}
                    </button>
                    {error && (
                        <p className="text-red-500 text-sm text-center mt-2">
                            {error}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default SignIn;

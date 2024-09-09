import { Modal } from "antd";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import axios from "axios";

const CreateCustomer = ({ open, handleClose }: any) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "myPassword12345",
    isAdmin: false,
  });
  const handleCreateCustomer = async () => {
    setLoading(true);
    const URL = "https://pharmacy-inventory-system-1vnk.onrender.com";
    try {
      const response = await axios.post(`${URL}/api/user/register`, formData);
      console.log(response);
    } catch (error: any) {
      Swal.fire({
        title: "Oops",
        text: error.response.data.message,
        icon: "error",
      });
      console.error("Error sending form data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        width={790}
        closable={true}
        footer={null}
        className="flex justify-center items-center mt-14 px-10"
      >
        <h1 className="font-bold text-left text-[#040821] text-[18px]">
          Create New Role
        </h1>

        <form className="w-full mt-10" onSubmit={handleCreateCustomer}>
          <div className=" w-[300px] mx-auto">
            <div>
              <label htmlFor="">Full Name</label>
              <input
                value={formData.username}
                className="w-full border-black border rounded-lg px-4 py-2"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                value={formData.email}
                className="w-full border-black border rounded-lg px-4 py-2"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex gap-8 justify-center items-center mt-8">
            <Button type="submit">
              {loading ? "Adding New User" : "Create New Role"}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreateCustomer;

import { Input, Form, Button, Upload } from "antd";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import "./style.scss";

export const FormClosing = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [imageUrl, setImageUrl] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleStartTime = () => {
    const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
    setStartTime(now);
  };
  const handleEndTime = () => {
    const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
    setEndTime(now);
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <div className="container">
        <Form>
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>

          {!startTime && (
            <div className="cont-button">
              <Button type="primary" onClick={handleStartTime}>
                Start Time
              </Button>
            </div>
          )}
          {startTime && (
            <div className="time">
              <Form.Item label="Start Time" name="starttime">
                <p>{startTime}</p>
              </Form.Item>
            </div>
          )}
          {!endTime && (
            <div className="cont-button">
              <Button type="primary" onClick={handleEndTime}>
                End Time
              </Button>
            </div>
          )}

          {endTime && (
            <Form.Item label="End Time" name="endtime">
              <p>{endTime}</p>
            </Form.Item>
          )}
          <Form.Item label="Hasil Tamu" name="username">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              // beforeUpload={beforeUpload}
              // onChange={handleChange}
            >
              {" "}
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          <Form.Item label="Bukti Bayar" name="username">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              // beforeUpload={beforeUpload}
              // onChange={handleChange}
            >
              {" "}
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

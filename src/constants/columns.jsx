import React from "react";
import { Button, Flex, Image, Tag } from "antd";
import { parseTimestamptzToDateString } from "../helper";
import { colors } from "./colors";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const EducationsColumn = (page) => {
  return [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      width: "50px",
      render: (value, item, index) => (page - 1) * 10 + (index + 1),
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      width: "200px",
      render: (value) => parseTimestamptzToDateString(value),
    },
    {
      title: "Created By",
      dataIndex: "created_by",
      key: "created_by",
      width: "200px",
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      key: "updated_at",
      width: "200px",
      render: (value) => parseTimestamptzToDateString(value),
    },
    {
      title: "Updated By",
      dataIndex: "updated_by",
      key: "updated_by",
      width: "200px",
    },
    {
      title: "Institution Name",
      dataIndex: "institution_name",
      key: "institution_name",
      width: "400px",
    },
    {
      title: "Logo",
      dataIndex: "institution_logo",
      key: "institution_logo",
      width: "100px",
      render: (value) => {
        return <Image height={50} src={value} />;
      },
    },
    {
      title: "Field of Study",
      dataIndex: "field_of_study",
      key: "field_of_study",
      width: "400px",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
      width: "200px",
      render: (value) => parseTimestamptzToDateString(value),
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      width: "200px",
      render: (value) => parseTimestamptzToDateString(value),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "400px",
    },
    {
      title: "Degree",
      dataIndex: "degree",
      key: "degree",
      width: "300px",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      width: "100px",
      render: (value) => {
        return (
          <Tag color={colors[0]} key="grade">
            {value}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      width: "250px",
      render: (value, data, index) => {
        return (
          <Flex gap="small" wrap>
            <Button
              type="default"
              icon={<EditOutlined />}
              onClick={() => alert("Edit Data " + data.company_name)}
            >
              Edit
            </Button>
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => alert("Delete Data " + data.company_name)}
            >
              Delete
            </Button>
          </Flex>
        );
      },
    },
  ];
};

export const ExperiencesColumn = (page) => {
  return [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      width: "50px",
      render: (value, item, index) => (page - 1) * 10 + (index + 1),
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      width: "200px",
      render: (value) => parseTimestamptzToDateString(value),
    },
    {
      title: "Created By",
      dataIndex: "created_by",
      key: "created_by",
      width: "200px",
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      key: "updated_at",
      width: "200px",
      render: (value) => parseTimestamptzToDateString(value),
    },
    {
      title: "Updated By",
      dataIndex: "updated_by",
      key: "updated_by",
      width: "200px",
    },
    {
      title: "Company Name",
      dataIndex: "company_name",
      key: "company_name",
      width: "400px",
    },
    {
      title: "Logo",
      dataIndex: "company_logo",
      key: "company_logo",
      width: "100px",
      render: (value) => {
        return <Image height={50} src={value} />;
      },
    },
    {
      title: "Job Title",
      dataIndex: "job_title",
      key: "job_title",
      width: "400px",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
      width: "200px",
      render: (value) => parseTimestamptzToDateString(value),
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      width: "200px",
      render: (value) => parseTimestamptzToDateString(value),
    },
    // {
    //   title: "Skills",
    //   dataIndex: "skills_tag",
    //   key: "skills_tag",
    //   width: "400px",
    //   render: (value) => (
    //     <>
    //       {value.split(",").map((item) => {
    //         const random = Math.floor(Math.random() * colors.length);
    //         return (
    //           <Tag color={colors[random]} key={item}>
    //             {item}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      width: "250px",
      render: (value, data, index) => {
        return (
          <Flex gap="small" wrap>
            <Button
              type="default"
              icon={<EditOutlined />}
              onClick={() => alert("Edit Data " + data.company_name)}
            >
              Edit
            </Button>
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => alert("Delete Data " + data.company_name)}
            >
              Delete
            </Button>
          </Flex>
        );
      },
    },
  ];
};

"use client";
import { addATask } from "@/lib/actions";
import { Circle, CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, ListBox, Modal, Surface, TextField, Select, DateField, Calendar, DatePicker } from "@heroui/react";

const AddTask = () => {
    return (
        <Modal>
            <Button variant="secondary">Add a Task</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <CirclePlus className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Add a Task</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={addATask} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="title" type="text">
                                        <Label>Title</Label>
                                        <Input placeholder="Enter Title" />
                                    </TextField>
                                    <TextField className="w-full" name="description" type="text">
                                        <Label>Task Description</Label>
                                        <Input placeholder="Enter description" />
                                    </TextField>


                                    <Select name="status" className="w-[256px]" placeholder="Select one">
                                        <Label>Status</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="pending" textValue="Pending">
                                                    Pending
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="in-progress" textValue="In Progress">
                                                    In Progress
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="completed" textValue="Completed">
                                                    Completed
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>



                                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                                        <Label>Priority</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="high" textValue="High">
                                                    High
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="medium" textValue="Medium">
                                                    Medium
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="low" textValue="Low">
                                                    Low
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>

                                    <TextField className="w-full" name="assignedTo" type="text">
                                        <Label>Assigned To</Label>
                                        <Input placeholder="Enter who is assigned" />
                                    </TextField>


                                    <DatePicker className="w-64" name="date">
                                        <Label>Due Date</Label>
                                        <DateField.Group fullWidth>
                                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                            <DateField.Suffix>
                                                <DatePicker.Trigger>
                                                    <DatePicker.TriggerIndicator />
                                                </DatePicker.Trigger>
                                            </DateField.Suffix>
                                        </DateField.Group>
                                        <DatePicker.Popover>
                                            <Calendar aria-label="Event date">
                                                <Calendar.Header>
                                                    <Calendar.YearPickerTrigger>
                                                        <Calendar.YearPickerTriggerHeading />
                                                        <Calendar.YearPickerTriggerIndicator />
                                                    </Calendar.YearPickerTrigger>
                                                    <Calendar.NavButton slot="previous" />
                                                    <Calendar.NavButton slot="next" />
                                                </Calendar.Header>
                                                <Calendar.Grid>
                                                    <Calendar.GridHeader>
                                                        {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                                    </Calendar.GridHeader>
                                                    <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                                                </Calendar.Grid>
                                                <Calendar.YearPickerGrid>
                                                    <Calendar.YearPickerGridBody>
                                                        {({ year }) => <Calendar.YearPickerCell year={year} />}
                                                    </Calendar.YearPickerGridBody>
                                                </Calendar.YearPickerGrid>
                                            </Calendar>
                                        </DatePicker.Popover>
                                    </DatePicker>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit">Submit Task</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddTask;
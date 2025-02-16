import { useState } from "react";
import { formatDate, EventApi } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { Box, Typography, List, ListItem, ListItemText, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "@/components/Header";
import Dialog from "@/components/Dialog";

function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDateSelect = (selectInfo: any) => {
    const title = "Please enter a new title for your event";
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: String(Date.now()),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }

    handleDialogOpen();
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full calendar interactive page" />
      <Box display="flex" justifyContent="space-between" mt="20px" gap="20px">
        <Box
          flex="1 1 20%"
          borderRadius="10px"
          p="20px"
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: any) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.primary[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={formatDate(event.start, { month: "long", day: "numeric", year: "numeric" })}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box flex="1 1 80%">
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateSelect}
            eventContent={(eventInfo) => (
              <Typography>
                {eventInfo.timeText} {eventInfo.event.title}
              </Typography>
            )}
            eventClick={(info) => {
              alert(`Event: ${info.event.title}`);
            }}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                start: "2025-02-14",
              },
              {
                id: "5123",
                title: "Timed event",
                start: "2025-02-28",
              },
            ]}
          />
        </Box>
      </Box>
      <Dialog open={isDialogOpen} onClose={handleDialogClose} />
    </Box>
  );
}

export default Calendar;

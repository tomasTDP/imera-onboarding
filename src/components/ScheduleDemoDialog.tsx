import { useState } from 'react'
import { Calendar, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const timeSlots = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM']
const days = [
  { label: 'Mon', date: '24' },
  { label: 'Tue', date: '25' },
  { label: 'Wed', date: '26' },
  { label: 'Thu', date: '27' },
  { label: 'Fri', date: '28' },
]

export default function ScheduleDemoDialog({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  const handleConfirm = () => {
    setConfirmed(true)
  }

  return (
    <Dialog onOpenChange={(open) => { if (!open) { setConfirmed(false); setSelectedDay(null); setSelectedTime(null) } }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[480px] p-6">
        {confirmed ? (
          <div className="flex flex-col items-center text-center space-y-4 py-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint-energy/20">
              <CheckCircle2 className="h-7 w-7 text-mint-energy" />
            </div>
            <h2 className="text-xl font-bold text-midnight-black">
              Demo scheduled!
            </h2>
            <p className="text-sm text-wisdom-grey">
              We'll send a calendar invite to your email for {selectedDay} at{' '}
              {selectedTime}. Our team will walk you through the Enterprise plan.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-midnight-black">
                Schedule a Demo
              </DialogTitle>
              <p className="text-[13px] text-wisdom-grey">
                Pick a time that works for your team.
              </p>
            </DialogHeader>

            {/* Day picker */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-wisdom-grey">
                <Calendar className="h-3.5 w-3.5" />
                Select a day
              </div>
              <div className="flex gap-2">
                {days.map((day) => (
                  <button
                    key={day.date}
                    onClick={() => setSelectedDay(`${day.label} ${day.date}`)}
                    className={`flex flex-1 flex-col items-center gap-0.5 rounded-lg border-2 py-2.5 text-xs transition-all ${
                      selectedDay === `${day.label} ${day.date}`
                        ? 'border-burnt-papaya bg-burnt-papaya/5'
                        : 'border-grey-200 hover:border-grey-300'
                    }`}
                  >
                    <span className="text-wisdom-grey">{day.label}</span>
                    <span
                      className={`text-sm font-bold ${
                        selectedDay === `${day.label} ${day.date}`
                          ? 'text-burnt-papaya'
                          : 'text-midnight-black'
                      }`}
                    >
                      {day.date}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time picker */}
            {selectedDay && (
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-wisdom-grey">
                  <Clock className="h-3.5 w-3.5" />
                  Select a time
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-lg border-2 py-2 text-[13px] font-medium transition-all ${
                        selectedTime === time
                          ? 'border-burnt-papaya bg-burnt-papaya/5 text-burnt-papaya'
                          : 'border-grey-200 text-midnight-black hover:border-grey-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              onClick={handleConfirm}
              disabled={!selectedDay || !selectedTime}
              className="h-11 w-full rounded-[10px] text-sm font-semibold mt-2"
            >
              Confirm Demo
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

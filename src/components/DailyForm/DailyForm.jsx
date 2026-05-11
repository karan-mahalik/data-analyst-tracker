import "./DailyForm.css";

function DailyForm({
  formData,
  setFormData,
  handleSubmit,
}) {
  return (
    <form
      className="daily-form"
      onSubmit={handleSubmit}
    >

      <h2>Add Daily Progress</h2>

      <input
        type="text"
        placeholder="Topic Learned"
        value={formData.topic}
        onChange={(e) =>
          setFormData({
            ...formData,
            topic: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Hours Studied"
        value={formData.hours}
        onChange={(e) =>
          setFormData({
            ...formData,
            hours: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Notes"
        rows="5"
        value={formData.notes}
        onChange={(e) =>
          setFormData({
            ...formData,
            notes: e.target.value,
          })
        }
      />

      <button type="submit">
        Save Progress
      </button>

    </form>
  );
}

export default DailyForm;